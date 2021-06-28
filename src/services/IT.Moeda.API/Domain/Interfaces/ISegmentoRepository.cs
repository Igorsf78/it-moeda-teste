using IT.Moeda.API.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IT.Moeda.API.Domain.Interfaces
{
    public interface ISegmentoRepository
    {
        Task<SegmentoEntity> SelectAsync(Int32 id);
        Task<SegmentoEntity> SelectByName(string name);
        Task<IEnumerable<SegmentoEntity>> SelectAsync();
        Task<SegmentoEntity> InsertAsync(SegmentoEntity segmento);
        Task<SegmentoEntity> UpdateAsync(SegmentoEntity segmento);
        Task<bool> DeleteAsync(SegmentoEntity segmento);

    }
}
