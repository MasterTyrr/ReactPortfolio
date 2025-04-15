using Microsoft.AspNetCore.Mvc;
using ReactPortfolio.Server.Models;
using System.Globalization;

namespace ReactPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PasswordGeneratorController : Controller
    {
        const string charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
        const string charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const string charactersNumbers = "1234567890";
        const string charactersSymbols = "$%#@!*?;:^&'";

        private readonly ILogger<PasswordGeneratorController> _logger;

        public PasswordGeneratorController(ILogger<PasswordGeneratorController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "PasswordGenerator")]
        //public string GetPassword([FromBody] PasswordGeneratorLimits values)
        public string GetPassword([FromQuery] bool RealWords, int MaxLength = 20)
        {
            //int MaxLength = 20;
            if (RealWords)
            {
                string password = string.Empty;
                string firstWord = CultureInfo.InvariantCulture.TextInfo.ToTitleCase(GetWord());
                string secondWord = CultureInfo.InvariantCulture.TextInfo.ToTitleCase(GetWord());
                Random rndNum = new Random();
                string randomNum = rndNum.Next(0, 9).ToString();
                string randomSymbol = charactersSymbols[Random.Shared.Next(0, charactersSymbols.Length)].ToString();
                password = firstWord + secondWord + randomNum + randomSymbol;
                return password;
            }
            else
            {
                return GenerateRandomPassword(MaxLength);
            }
        }

        private static string GenerateRandomPassword(int MaxLengthPassword)
        {
            string password = string.Empty;
            for (int i = 0; i < MaxLengthPassword; i++)
            {
                Random rndNum = new Random();
                int randomNum = rndNum.Next(0, 4);
                switch (randomNum)
                {
                    case 0:
                        password += charactersLowercase[Random.Shared.Next(0, charactersLowercase.Length)];
                        break;
                    case 1:
                        password += charactersUppercase[Random.Shared.Next(0, charactersUppercase.Length)];
                        break;
                    case 2:
                        password += charactersNumbers[Random.Shared.Next(0, charactersNumbers.Length)];
                        break;
                    case 3:
                        password += charactersSymbols[Random.Shared.Next(0, charactersSymbols.Length)];
                        break;
                }
            }

            return password;
        }

        public string GetWord()
        {
            string word = string.Empty;
            //API connection to get a random word from https://random-word-api.herokuapp.com/word
            string url = "https://random-word-api.herokuapp.com/word?number=1";
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = client.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    string json = response.Content.ReadAsStringAsync().Result;
                    word = json.Trim('[', '\"', ']');
                }
            }
            return word;
        }
    }

}
