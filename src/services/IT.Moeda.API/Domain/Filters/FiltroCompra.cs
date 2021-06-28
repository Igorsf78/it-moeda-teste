namespace IT.Moeda.API.Domain.Filters
{
    public class FiltroCompra
    {
        public string CodigoMoedaOrigem { get; set; }
        public string CodigoMoedaDestino { get; set; }
        public double QuantidadeDeMoedasVendida { get; set; }
        public double QuantidadeDeMoedasComprada { get; set; }
        public string Segmento { get; set; }
    }
}
