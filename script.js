
let  canvas  =  document . getElementById ( "cobra" ) ;
let  context  =  canvas . getContext ( "2d" ) ; 

let  box  =  32 ;
let  cobra  =  [ ] ;  

cobra [ 0 ]  =  { 
    x : 8 * caixa ,
    y : 8 * caixa
}


let  direção  =  "certo" ;

let  comida  =  {
    x : matemática . floor ( Math . random ( ) * 15  +  1 ) * box ,
    y : matemática . floor ( Math . random ( ) * 15  +  1 ) * box
}

/ 
function  criarBG ( ) {
    
    contexto . fillStyle  =  "preto" ;
    
    contexto . fillRect ( 0 ,  0 ,  16 * caixa ,  16 * caixa ) ;
}


function  criarCobrinha ( ) {
    
    for ( i  =  1 ;  i  <  cobra . comprimento ;  i ++ ) {
    {
        
        contexto . fillStyle  =  "verde" ;
        
        contexto . fillRect ( cobra [ i ] . x ,  cobra [ i ] . y ,  caixa - 2 ,  caixa - 2 ) ;
    }  
}  


function  drawFood ( ) {
    
    contexto . fillStyle  =  "vermelho" ;
    
    contexto . fillRect ( comida . x ,  comida . y ,  caixa ,  caixa )
}


documento . addEventListener ( 'keydown' ,  update ) ;




function  iniciarJogo ( ) {

    
    for ( i  =  1 ;  i  <  cobra . comprimento ;  i ++ ) {
        if ( cobra [ 0 ] . x  ==  cobra [ i ] . x  &&  cobra [ 0 ] . y  ==  cobra [ i ] . y ) {
            clearInterval ( jogo ) ;
            alerta ( 'GAME OVER' ) ;
        }
    }

    
  
    if ( cobra [ 0 ] . x  >  15 * caixa  &&  direção  ==  "direita" )  cobra [ 0 ] . x  =  0 ;
    if ( cobra [ 0 ] . x  <  0  &&  direção  ==  "esquerda" )  cobra [ 0 ] . x  =  16 * caixa ;
    if ( cobra [ 0 ] . y  >  15 * caixa  &&  direção  ==  "para baixo" )  cobra [ 0 ] . y  =  0 ;
    if ( cobra [ 0 ] . y  <  0  &&  direction  ==  "para cima" )  cobra [ 0 ] . y  =  16 * caixa ;

    
    criarBG ( ) ;
    criarCobrinha ( ) ;
    drawFood ( ) ;

    let  cobraX  =  cobra [ 0 ] . x ;
    let  cobraY  =  cobra [ 0 ] . y ;

    
    if ( direção  ==  "direita" )  cobraX  +  caixa ;
    if ( direção  ==  "esquerda" )  cobraX  -   caixa ;
    if ( direção  ==  "para cima" )  cobraY  -  caixa ;
    if ( direção  ==  "para baixo" )  cobraY  +  caixa ;

    
    while (cobraX  = comida . x  || ( cobraY = comida . y)  {cobra . pop ( ) ;

    }
 
        
      { comida . x  =  matemática . chão ( matemática . aleatório ( ) * 15  +  1 ) * caixa ;
        comida . y  =  matemática . chão ( matemática . aleatório ( ) * 15  +  1 ) * caixa ;
    }

    let  newHead  =  {
        x : cobraX ,
        y : cobraY
    }

    
    cobra . unshift ( newHead ) ;
}

  let  jogo  =  setInterval ( iniciarJogo ,  100 );