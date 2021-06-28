using IT.Moeda.API.Domain.Filters;
using IT.Moeda.API.Domain.Interfaces;
using IT.Moeda.API.Domain.Response;
using IT.Moeda.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace IT.Moeda.API.Services
{
    public class CotacaoService : Service, ICotacaoService
    {
        private readonly HttpClient _httpClient;
        private readonly ISegmentoRepository _repository;       

        public CotacaoService(HttpClient httpClient, ISegmentoRepository repository)
        {
            _httpClient = httpClient;
            _repository = repository;
        }


        public async Task<ConversaoResponse> Conversao(string moedaOrigem, string moedaDestino)
        {
            var response = await _httpClient.GetAsync($"https://economia.awesomeapi.com.br/{moedaOrigem}-{moedaDestino}");

            if (!TratarErrosResponse(response))
            {
                return null;
            }

            try
            {
                var responseConversao = await DeserializarObjetoResponse<IList<ConversaoResponse>>(response);
                return responseConversao[0];
            }
            catch (Exception ex)
            {
                var erro = ex;
                return null;
            }
        }

        public async Task<ConversaoResponse> Conversao(FiltroCompra filtro)
        {
            var response = await _httpClient.GetAsync($"https://economia.awesomeapi.com.br/{filtro.CodigoMoedaOrigem}-{filtro.CodigoMoedaDestino}");

            if (!TratarErrosResponse(response))
            {
                return null;
            }

            try
            {
                var responseConversao = await DeserializarObjetoResponse<IList<ConversaoResponse>>(response);
                var segmento = await _repository.SelectByName(filtro.Segmento);

                var calculo = (filtro.QuantidadeDeMoedasComprada * Convert.ToDouble(responseConversao[0].High)) * (1 + Convert.ToDouble(segmento.Tax)) ;
                return responseConversao[0];
            }
            catch (Exception ex)
            {
                var erro = ex;
                return null;
            }
        }

        public async Task<object> ListCurrencys()
        {
            var response = await _httpClient.GetAsync("https://economia.awesomeapi.com.br/json/available/uniq");
            var responseDynamic = await DeserializarObjetoResponse<dynamic>(response);
            return responseDynamic;
        }

        public async Task<object> ListOfConversions()
        {
            var response = await _httpClient.GetAsync("https://economia.awesomeapi.com.br/json/available");
            var responseDynamic = await DeserializarObjetoResponse<dynamic>(response);
            return responseDynamic;

        }
    }    
}
