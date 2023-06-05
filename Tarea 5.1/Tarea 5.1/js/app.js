window.addEventListener('load', initScene)
//Aqui describimos las posiciones de los meteoritos
const meteors = [
    {x: 0, y:0, z: -25 },

]
let meteorito

function initScene(){
    let orbits = document.querySelectorAll('.orbit')
    
    orbits.forEach(orbit=>{
        
        meteors.forEach(pos =>{
            
            meteorito = document.createElement('a-entity')
            meteorito.setAttribute('geometry', { primitive: 'sphere', radius:0.5})
            meteorito.setAttribute('material', { shader: 'flat', src:'#meteorito'})
            meteorito.object3D.position.set(pos.x, pos.y, pos.z)

            orbit.appendChild(meteorito)
        })
    })
}

