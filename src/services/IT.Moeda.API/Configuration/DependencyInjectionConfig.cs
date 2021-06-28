using IT.Moeda.API.Data;
using IT.Moeda.API.Data.Repository;
using IT.Moeda.API.Domain.Interfaces;
using IT.Moeda.API.Services;
using IT.Moeda.Domain.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace IT.Moeda.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddHttpClient<ICotacaoService, CotacaoService>();
            services.AddScoped<ISegmentoRepository, SegmentoRepository>();
            services.AddScoped<DataContext>();
        }
    }
}
