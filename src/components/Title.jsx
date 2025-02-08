const Title = ({ title, subTitel }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
        {title}
      </h3>
      <p  className="text-center text-metal-700">{subTitel}</p>
    </div>
  );
};

export default Title;
