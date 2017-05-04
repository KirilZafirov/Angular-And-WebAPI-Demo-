using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularWithWebApi.Models
{
    public class Location
    {

        public int Id { get; set; }
        [Required(ErrorMessage ="Name is Reqired", AllowEmptyStrings = false)]
        [MinLength(5,ErrorMessage ="Min Length Is 5 Chars")]
        [MaxLength(11, ErrorMessage = "Max Length Is 11 Chars")]
        public string Name { get; set; }
        [Required()]
        [MinLength(4)]
        [MaxLength(12)]
        public string Place { get; set; }

        public double PriceForStaying { get; set; }

        public string Description { get; set; }
        public int UpVoteCount { get; set; }
        public int DownVoteCount { get; set; }
        public int Rating { get; set; }

        public List<Image> ImageNames { get; set; }
    }
}