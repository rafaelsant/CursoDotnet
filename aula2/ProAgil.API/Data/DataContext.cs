using Microsoft.EntityFrameworkCore;
using ProAgil.Domain.Model;

namespace ProAgil.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Evento> Eventos { get; set; }
    }
}