using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAgil.Domain.Model;
using ProAgil.Repository.Data;

namespace ProAgil.Repository
{
    public class ProAgilRepository : IProAgilRepository
    {
        private readonly ProAgilContext _context;
        public ProAgilRepository(ProAgilContext context)
        {   
            _context = context;
        }
        //GERAIS
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        //EVENTO
        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(c=>c.Lotes)
            .Include(c=> c.RedesSociais);

            if(includePalestrantes)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(p=> p.Palestrante);
            }

            query = query.OrderByDescending(c=> c.DataEvento);

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetAllEventosAsyncById(int EventoId, bool includePalestrantes)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(c=>c.Lotes)
            .Include(c=> c.RedesSociais);

            if(includePalestrantes)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(p=> p.Palestrante);
            }

            query = query.OrderByDescending(c=> c.DataEvento)
                    .Where(c=>c.Id == EventoId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Evento[]> GetAllEventosAsyncByTema(string Tema, bool includePalestrantes)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(c=>c.Lotes)
            .Include(c=> c.RedesSociais);

            if(includePalestrantes)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(p=> p.Palestrante);
            }

            query = query.OrderByDescending(c=> c.DataEvento)
                    .Where(c=>c.Tema.ToLower().Contains(Tema.ToLower()));

            return await query.ToArrayAsync();
        }
        //PALESTRANTE
        public async Task<Palestrante> GetAllPalestranteAsyncByName(string PalestranteNome, bool includeEvento = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
            .Include(p=> p.RedesSociais);

            if(includeEvento)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(e=>e.EventoId);
            }

            query = query.OrderBy(p=> p.Nome)
            .Where(p=>p.Nome.ToLower().Contains(PalestranteNome.ToLower()));

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEvento = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
            .Include(p=> p.RedesSociais);

            if(includeEvento)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(e=>e.EventoId);
            }

            query = query.OrderBy(p=> p.Nome);

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante> GetPalestrantes(int PalestranteId, bool includeEvento)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
            .Include(p=> p.RedesSociais);

            if(includeEvento)
            {
                query = query
                .Include(pe=> pe.PalestrantesEventos)
                .ThenInclude(e=>e.EventoId);
            }

            query = query.OrderBy(p=> p.Nome)
            .Where(p=>p.Id == PalestranteId);

            return await query.FirstOrDefaultAsync();
        }
    }
}