using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reg.Models
{
    public class AuthenticationContext : IdentityDbContext<Login>
    {
        public AuthenticationContext (DbContextOptions options) : base(options)
        {
          
    }
        public DbSet<Student> students { get; set; }
        public DbSet<Login> Login { get; set; }
    }
}
