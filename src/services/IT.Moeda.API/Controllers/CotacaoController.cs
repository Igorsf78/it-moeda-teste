using IT.Moeda.API.Domain.Filters;
using IT.Moeda.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace IT.Moeda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CotacaoController : ControllerBase
    {
        private readonly ICotacaoService _service;

        public CotacaoController(ICotacaoService service)
        {
            _service = service;
        }        

        [HttpPost("compra")]
        public async Task<ActionResult> GetCompra([FromBody] FiltroCompra filtro)
        {
            var result = await _service.Conversao(filtro);
            return Ok(result);
        }

        [HttpGet("currencys")]
        public async Task<ActionResult> GetListCurrencys()
        {
            var result = await _service.ListCurrencys();
            return Ok(result);
        }

        [HttpGet("conversions")]
        public async Task<ActionResult> GetListOfConversions()
        {
            var result = await _service.ListOfConversions();
            return Ok(result);
        }

        

    }
}
