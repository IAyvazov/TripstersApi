namespace Tripsters.Data.Models.Common
{
    public abstract class BaseModel<T>
    {
        public T Id { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifyOn { get; set; }

        public DateTime DeletedOn { get; set; }
    }
}
