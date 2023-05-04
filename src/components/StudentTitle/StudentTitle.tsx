import Image from "next/image";

import sty from "./student.module.scss";

interface studentProps {
  studentName: string;
  studentPic: string;
  studentAge: string;
  studentFavoriteClass: string;
}

export function StudentTitle(props: studentProps) {
  return (
    <div className={sty.ultradiv}>
      <div className={sty.div}>
        <Image className={sty.image} src={props.studentPic} alt="StudentImage" width={40} height={40}/>
          <h1 className={sty.name}>{props.studentName} - {props.studentAge} anos</h1>
      </div>
      <p className={sty.class}>{props.studentFavoriteClass}</p>
    </div>
  )
}