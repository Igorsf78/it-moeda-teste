using IT.Moeda.API.Domain.Filters;
using IT.Moeda.API.Domain.Response;
using System.Threading.Tasks;

namespace IT.Moeda.Domain.Interfaces
{
    public interface ICotacaoService
    {
        Task<ConversaoResponse> Conversao(string moedaOrigem, string moedaDestino);

        Task<ConversaoResponse> Conversao(FiltroCompra filtro);

        Task<object> ListCurrencys();

        Task<object> ListOfConversions();
    }
}
