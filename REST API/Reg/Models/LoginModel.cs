using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reg.Models
{
    
    public class LoginModel
    {
        public int? id { get; set; }
        public string username { get; set; }
        public string Password { get; set; }
        public string email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
    }
}
