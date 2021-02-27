using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProAgil.Domain.Model;
using ProAgil.Repository.Data;

namespace ProAgil.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        public ProAgilContext _context { get; }
        public EventosController(ProAgilContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _context.Eventos.ToListAsync();
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {

            try
            {
                var results = await _context.Eventos.FirstOrDefaultAsync(x => x.Id == id);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }
        [HttpPost]

        public async Task<IActionResult> PostEvento(Evento evento){
          try
          {
            _context.Eventos.Add(evento);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = evento.Id }, evento);
          }
          catch(System.Exception)
          {
            return this.StatusCode(StatusCodes.Status400BadRequest,"Não foi possível realizar a ação");
          }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvento(int id, Evento evento){
          var results = await _context.Eventos.FirstOrDefaultAsync(x => x.Id == id);
          evento.Id = results.Id;
          _context.Entry(evento).State = EntityState.Modified;
          try
          {
              await _context.SaveChangesAsync();
          }
          catch (DbUpdateConcurrencyException)
          {
              if (!EventoExiste(id))
              {
                  return NotFound();
              }
              else
              {
                  throw;
              }
          }

          return NoContent();
        }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEvento(int id)
    {
        var evento = await _context.Eventos.FirstOrDefaultAsync(x => x.Id == id);


        if (evento == null)
        {
            return NotFound();
        }

        _context.Eventos.Remove(evento);
        await _context.SaveChangesAsync();

        return NoContent();
    }
        private bool EventoExiste(long id) =>
          _context.Eventos.Any(e => e.Id == id);
    }
}
