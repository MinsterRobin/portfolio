import style from "../styles/Separator.module.css";
import Image from "next/image"

const Separator = () => {
  return(
      <div className={style.c_separator}>
          <Image src={"/Separator.svg"} alt="Separator" width="600px" height="30px"/>
      </div>
  );
};

export default Separator;