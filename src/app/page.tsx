"use client"
import Image from 'next/image'
import sty from './page.module.scss'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

import Input from '../components/Input';
import Button from "../components/Button";
import { getInstaProfilePic } from '@/services/getInstaProfilePic';
import { StudentTitle } from '@/components/StudentTitle/StudentTitle';

const createUserFormSchema = z.object({
  nome: z.string()
    .nonempty('Nome não pode estar em branco')
    .transform(name => {
      return name.trim()
    }),
  favoriteClass: z.string()
    .nonempty('Aula prerida não pode estar em branco')
    .transform(name => {
      return name.trim()
    }),
  idade: z.string()
  .nonempty('Idade em branco')
  .regex(/^\d+$/, 'A idade deve ser um número'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

interface Student {
  nome: string;
  favoriteClass: string;
  profilePic: string;
  idade: string;
}


export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function handleSignUp(data: CreateUserFormData) {
    try {
      const firstLetterOfName = data.nome.charAt(0).toUpperCase();
      const profilePic = "/static/" + firstLetterOfName + ".png";

      const newStudent: Student = {
        nome: data.nome,
        profilePic: profilePic,
        idade: data.idade,
        favoriteClass: data.favoriteClass,
      }
      setStudents([...students, newStudent]);

      console.log(profilePic);
    } catch (error) {
      console.log(error);
      console.log("Deu erro maninho");
    }

  }

  return (
    <>
      <header>
      </header>
      <main className={sty.main}>
        <div className={sty.container}>
          <form className={sty.form} onSubmit={handleSubmit(handleSignUp)}>
            <Input
              register={register}
              name="nome"
              width="480px"
              placeholder='Nome'
              type="text"
              id="nome"
              alt="Põe ae seu nome truta"
              error={errors.nome ? true : false}
            />
            {errors.nome && <span className={sty.errorSpan}>{errors.nome.message}</span>}
            <span className={sty.inputContainer}>
              <div>
                <Input
                  register={register}
                  name="favoriteClass"
                  width="360px"
                  placeholder='Aula preferida'
                  type="text"
                  id="favoriteClass"
                  alt="Põe ae sua aula preferida ai truta"
                  error={errors.favoriteClass ? true : false}
                />
                {errors.favoriteClass && <span className={sty.errorSpan}>{errors.favoriteClass.message}</span>}
              </div>
              <div>
                <Input
                  register={register}
                  name="idade"
                  width="112px"
                  margin="1rem 0 0 .5rem"
                  placeholder='Idade'
                  type="text"
                  id="idade"
                  alt="Põe ae sua idade ai truta"
                  error={errors.idade ? true : false}
                />
                {errors.idade && <span className={sty.errorSpan}>{errors.idade.message}</span>}
              </div>
            </span>
            <Button value="Enviar" id="enviar"/>
          </form>
          { students.map( (student, index) => (
            <StudentTitle key={index} studentName={student.nome} studentPic={student.profilePic} studentAge={student.idade} studentFavoriteClass={student.favoriteClass} />
          ))}
        </div>
      </main>
    </>
  )
}
