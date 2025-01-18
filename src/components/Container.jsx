/* eslint-disable react/prop-types */
const Container= ({title, children})=>{
    return(
        <section> 
        <h3>{title}</h3>
        {children}
        </section>
    )
}
export default Container