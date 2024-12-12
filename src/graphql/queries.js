/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBancoImagens = /* GraphQL */ `
  query GetBancoImagens($id: ID!) {
    getBancoImagens(id: $id) {
      id
      EmpresaExemplo
      ImagemDeFundo
      LogoBrancaConecta
      LogoFundoBrancoConecta
      LogoAzulConecta
      PerfilFotoExemploReal
      InteligenciaArtificial
      LogoPretaConecta
      Background2
      JoiaSenha
      ChavesSenha
      PerfilSemFoto
      GoogleLogo
      FacebookLogo
      JoiaTelefone
      PerfilAvatar
      Post1
      Post2
      Post3
      Post4
      Post5
      MonicaIPerfil
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBancoImagens = /* GraphQL */ `
  query ListBancoImagens(
    $filter: ModelBancoImagensFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBancoImagens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        EmpresaExemplo
        ImagemDeFundo
        LogoBrancaConecta
        LogoFundoBrancoConecta
        LogoAzulConecta
        PerfilFotoExemploReal
        InteligenciaArtificial
        LogoPretaConecta
        Background2
        JoiaSenha
        ChavesSenha
        PerfilSemFoto
        GoogleLogo
        FacebookLogo
        JoiaTelefone
        PerfilAvatar
        Post1
        Post2
        Post3
        Post4
        Post5
        MonicaIPerfil
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
