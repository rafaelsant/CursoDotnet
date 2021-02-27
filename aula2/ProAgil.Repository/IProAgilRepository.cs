using System.Threading.Tasks;
using ProAgil.Domain.Model;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //Geral
         void Add<T>(T entity) where T :class;
         void Update<T>(T entity) where T :class;
         void Delete<T>(T entity) where T :class;

         Task<bool> SaveChangesAsync();

         //Eventos
         Task<Evento[]> GetAllEventosAsync(bool includePalestrantes);
         Task<Evento[]> GetAllEventosAsyncByTema(string Tema,bool includePalestrantes);
         Task<Evento> GetAllEventosAsyncById(int EventoId,bool includePalestrantes);

        //PALESTRANTE
        Task<Palestrante> GetAllPalestranteAsyncByName(int PalestranteId,bool includePalestrantes);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includePalestrantes);

    }
}