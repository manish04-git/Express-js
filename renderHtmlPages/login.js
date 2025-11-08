
export default function login(){
  return `
    <form action="/submit" method="post">  
      <input type="text" placeholder="enter name"/> <br/> <br/>
      <input type="password" placeholder="enter password"/> <br/> <br/>
      <button>login</button>
    </form>
   <button> <a href="/">home</a></button>
    `
}