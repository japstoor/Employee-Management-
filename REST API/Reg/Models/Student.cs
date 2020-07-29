using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reg.Models
{
    public class Student
    {
        [Key]
        public int? ID{ get; set; }
        public string UserName { get; set; }
        public string Passwrod { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int Salary { get; set; }


    }
}
