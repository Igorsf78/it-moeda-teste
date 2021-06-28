using IT.Moeda.API.Domain.Entities;
using IT.Moeda.API.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IT.Moeda.API.Data.Repository
{
    public class SegmentoRepository : ISegmentoRepository
    {

        private readonly DataContext _context;
        private DbSet<SegmentoEntity> _dataset;

        public SegmentoRepository(DataContext context)
        {
            _context = context;
            _dataset = context.Set<SegmentoEntity>();
        }

        public async Task<bool> DeleteAsync(SegmentoEntity segmento)
        {
            try
            {
                var result = await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(segmento.Id));
                if (result == null)
                {
                    return false;
                }

                _dataset.Remove(result);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return true;
        }

        public async Task<SegmentoEntity> InsertAsync(SegmentoEntity segmento)
        {
            try
            {
                segmento.CreateAt = DateTime.UtcNow;
                _dataset.Add(segmento);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return segmento;
        }

        public async Task<SegmentoEntity> SelectAsync(Int32 id)
        {
            try
            {
                return await _dataset.FirstOrDefaultAsync(s => s.Id.Equals(id));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<SegmentoEntity>> SelectAsync()
        {
            try
            {
                return await _dataset.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<SegmentoEntity> SelectByName(string name)
        {
            try
            {
                return await _dataset.FirstOrDefaultAsync(s => s.Name.Equals(name));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<SegmentoEntity> UpdateAsync(SegmentoEntity segmento)
        {
            try
            {
                var result = await _dataset.FirstOrDefaultAsync(s => s.Id == segmento.Id);
                if (result == null)
                {
                    return null;
                }

                segmento.UpdateAt = DateTime.UtcNow;
                segmento.CreateAt = result.CreateAt;

                _context.Entry(result).CurrentValues.SetValues(segmento);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return segmento;
        }
    }
}
