namespace ReactPortfolio.Server.Models
{
    public class PasswordGeneratorLimits
    {
        public int? MaxLength { get; set; } = 128;
        public int? MinUpperCase { get; set; } = 1;
        public int? MinLowerCase { get; set; } = 1;
        public int? MinNumbers { get; set; } = 1;
        public int? MinSpecialChars { get; set; } = 1;
        public PasswordGeneratorLimits() { }
        public PasswordGeneratorLimits(int minLength, int maxLength, int minUpperCase, int minLowerCase, int minNumbers, int minSpecialChars)
        {
            MaxLength = maxLength;
            MinUpperCase = minUpperCase;
            MinLowerCase = minLowerCase;
            MinNumbers = minNumbers;
            MinSpecialChars = minSpecialChars;
        }
    }
}
