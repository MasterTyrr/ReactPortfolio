namespace ReactPortfolio.Server.Services
{
    public class DataRepositroy
    {
        public interface IDataRepository
        {
            string GetAPIKey();
        }
        public class DataRepository : IDataRepository
        {
            public IConfiguration _config;
            public DataRepository(IConfiguration configuration)
            {
                _config = configuration;
            }

            public string GetAPIKey()
            {
                return _config.GetSection("ApiKeys:Chatgpt").Value;
            }
        }
    }
}
