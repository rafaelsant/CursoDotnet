using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgil.Domain.Model;
using ProAgil.Repository;

namespace ProAgil.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PalestranteController : ControllerBase
    {
        private readonly IProAgilRepository _repo;
        public PalestranteController(IProAgilRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPalestrantes()
        {
            try
            {
                var results = await _repo.GetAllPalestrantesAsync(true);
                return Ok(results);
            }
            catch(System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }
        [HttpGet("{name}")]
        public async Task<IActionResult> GetPalestratesByNome(string name)
        {
            try
            {
                var results = await _repo.GetAllPalestranteAsyncByName(name,true);
                return Ok(results);
            }
            catch(System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post(Palestrante palestrante)
        {
            try
            {
                _repo.Add(palestrante);
                if(await _repo.SaveChangesAsync())
                {
                    return Created($"/api/palestrante/{palestrante.Id}",palestrante);
                }
            }
            catch(System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
            return BadRequest();
        }
        [HttpPut]
        public async Task<IActionResult> Put(int PalestranteId,Palestrante palestrante)
        {
            try
            {
                var encontrado = await _repo.GetPalestrantes(PalestranteId,false);
                _repo.Update(palestrante);
                if(encontrado == null) return NotFound();
                if(await _repo.SaveChangesAsync())
                {
                    return Created($"/api/evento/{palestrante.Id}",palestrante);
                }
            }
            catch(System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
            return BadRequest();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(int PalestranteId)
        {
            try
            {
                var encontrado = await _repo.GetPalestrantes(PalestranteId,false);
                
                _repo.Delete(encontrado);

                if(encontrado == null) return NotFound();

                if(await _repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch(System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
            return BadRequest();
        }
    }
}