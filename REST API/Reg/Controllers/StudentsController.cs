using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reg.Models;

namespace Reg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public StudentsController(AuthenticationContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Student>>> Getstudents()
        {
            return await _context.students.ToListAsync();
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Student>> GetStudent(int? id)
        {
            var student = await _context.students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutStudent(int? id, Student student)
        {
            if (id != student.ID)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        // POST: api/Students
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            _context.students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.ID }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Student>> DeleteStudent(int? id)
        {
            var student = await _context.students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.students.Remove(student);
            await _context.SaveChangesAsync();

            return student;
        }

        private bool StudentExists(int? id)
        {
            return _context.students.Any(e => e.ID == id);
        }
    }
}
