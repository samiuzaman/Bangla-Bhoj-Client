const Title = ({ title, subTitel }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center">
        {title}
      </h3>
      <p  className="w-11/12 lg:w-5/6 mx-auto text-center text-metal-700">{subTitel}</p>
    </div>
  );
};

export default Title;
