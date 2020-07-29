﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reg.Models
{
   
    public class Login : IdentityUser
    {
       public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
