class TypeWriter{
  constructor(target,text){
    this.target=target;
    this.text=text;
    this.typedText='';
  }

  startTyping(){
    for (let i=0;i<this.text.length;i++){
      setTimeout(()=>{
        this.typedText+=this.text.charAt(i);
        this.target.innerHTML=this.typedText;
      }, 120*i);
    }
  }

}