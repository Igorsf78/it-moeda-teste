using IT.Moeda.API.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IT.Moeda.API.Data.Mapping
{
    public class SegmentoMap : IEntityTypeConfiguration<SegmentoEntity>
    {
        public void Configure(EntityTypeBuilder<SegmentoEntity> builder)
        {
            builder.ToTable("Segmentos");
            builder.Property(s => s.Id).ValueGeneratedOnAdd();
            builder.Property(s => s.Name).IsRequired().HasColumnType("varchar(250)");
            builder.Property(s => s.Tax).IsRequired().HasColumnType("decimal(4,4)");
        }
    }
}
