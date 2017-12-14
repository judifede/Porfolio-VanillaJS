$(document).ready(function(){
    
    var num_images;
    var img_galery_src;
    
    function checkPage(){
        var url = window.location.href;
        var urlSplitted = url.split('?');
        var actualPage = urlSplitted[1];
        return actualPage;
    }
    
    function createImages(project){
        
        for (var i = 1; i < num_images+1; i++) {
            //Div
            var slider = $('.slider');
            var div = document.createElement("div");
            
            //Img
            var img = document.createElement("img");
            src_galery(project, i);
            
            var img_galery_alt = "img_galery" + i;
            //var img_galery_id= "img_galery" + i;
            img.setAttribute("src", img_galery_src);
            img.setAttribute("alt", img_galery_alt);
            //img.setAttribute("id", img_galery_id);
            
            //Añadir al HTML
            slider.append(div);
            div.append(img);
        }
        
    }

    function src_galery(project, i){

        switch(project){
            case 'project=abaco':
                img_galery_src= "../img/galeria/Abaco/Abaco" + i + ".png";
                break;
            case 'project=senderismo':
                img_galery_src= "../img/galeria/SenderismoGC/Senderismo" + i + ".png";
                break;
            case 'project=cm3ramblas':
                img_galery_src= "../img/galeria/CentroMédicoTresRamblas/CM3Ramblas" + i + ".png";
                break;
            default:
                alert("Proyecto no encontrado");
                break;
            
        }
    }
    
    function managementGalery(){
        var actualPage = checkPage();
        var obj_nombre_proyecto = document.getElementById('project_name');
        var link_back = document.getElementById('link_back');
        
        switch(actualPage){
            case "project=abaco":
                obj_nombre_proyecto.innerHTML = "Abaco";
                link_back.href = "../index.html#project_abaco";
                num_images = 2;
                createImages(actualPage);
                break;
            case "project=senderismo":
                obj_nombre_proyecto.innerHTML = "SenderismoGC";
                link_back.href = "../index.html#project_senderismo";
                num_images = 7;
                createImages(actualPage);
                break;
            case "project=cm3ramblas":
                obj_nombre_proyecto.innerHTML = "Centro Médico Tres Ramblas";
                link_back.href = "../index.html#project_cm3ramblas";
                num_images = 4;
                createImages(actualPage);
                break;
            default:
			    alert("Proyecto no encontrado");
                link_back.click();
                break;
        }
        
    }

    managementGalery();   
    
    $('.slider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        autoHover: true,
        pager: true,
        responsive: true,
        
    });
    
});