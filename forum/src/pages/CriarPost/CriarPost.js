import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const [hashtag, sethashtag] = useState("")

  const criarPostApi = async(e) =>{
    e.preventDefault()
    if(!title || !content){
      alert("Titulo e conteudo são campos obrigatórios")
    }

    const hashtagArray = hashtag.split(",")

    await createPost(title, content, image, hashtag)
    .then((resposne)=>{
      console.log("Post cridao com sucesso, response")
    })
    .catch((error) =>{
      console.log("Erro ao crir o post:", error)
    })

  }


  return (
   <>
   criarpost
   </>
  );
};

export default CriarPost;
