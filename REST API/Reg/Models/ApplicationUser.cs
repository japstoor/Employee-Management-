using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reg.Models
{
    public class ApplicationUser 
    {
        public string FullName { get; set; }
}
}
