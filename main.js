function showall(){
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.open('GET','https://jsonplaceholder.typicode.com/posts?userId=1')

    xmlhttp.onreadystatechange = () =>{
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            let jsonPosts = xmlhttp.responseText

            let objPostsJson = JSON.parse(jsonPosts)
            

            for (let i in objPostsJson){
                let item = objPostsJson[i]
                
                
                let divRow = document.createElement('div')
                divRow.className = 'row'

                let divCol = document.createElement('div')
                divCol.className = 'col'

                let p1 = document.createElement('p')
                p1.innerHTML = `<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#modal${item.id}">${item.title}</button>`

                
                let p3 = document.createElement('p')
                //p3.innerHTML = '<strong>User Id:</strong> ' + item.userId
                p3.innerHTML ='<hr>'

                divRow.appendChild(divCol)
                divCol.appendChild(p3)
                divCol.appendChild(p1)

                document.getElementById('results').appendChild(divRow)

                let myModal = document.createElement('div')
                myModal.className = 'modal fade'
                myModal.id = `modal${item.id}`
                myModal.tabIndex = '-1'
                myModal.role = "dialog"
                myModal.ariaLabel =`mymodal${item.id}`
                myModal.ariaHidden = "true"

                let modalDialog = document.createElement('div')
                modalDialog.className = "modal-dialog"
                modalDialog.role = "document"

                let modalContent = document.createElement('div')
                modalContent.className = "modal-content"

                let modalHeader = document.createElement('div')
                modalHeader.className = "modal-header"
                modalHeader.innerHTML = `<h5 class="modal-title" id="mymodal${item.id}">Title: </br>${item.title}</h5>`

                let modalBody = document.createElement('div')
                modalBody.className = "modal-body"
                modalBody.innerHTML = `<h5>Body:</h5><p> ${item.body}</p>`

                let modalFooter = document.createElement('div')
                modalFooter.className = 'modal-footer'
                modalFooter.innerHTML = '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'

                
                myModal.appendChild(modalDialog)
                modalDialog.appendChild(modalContent)
                modalContent.appendChild(modalHeader)
                modalContent.appendChild(modalBody)
                modalContent.appendChild(modalFooter)

                document.getElementById('resultados').appendChild(myModal)
                
            
            }

        }

        if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
            
        }
        if(!xmlhttp.readyState == 4){
            
        }
        
    }
        
    xmlhttp.send() 
       
}
        
    

    





