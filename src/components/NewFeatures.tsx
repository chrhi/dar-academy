import styles from "../styles";

const NewFeatures = ({
  imgUrl,
  title,
  subtitle,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-blue-500`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-gray-700 leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
