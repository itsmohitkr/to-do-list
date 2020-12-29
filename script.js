let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function addItem() {
    if (inpNewTask.val() != '') {
        let listitem = $('<li>', {
            'class': 'list-group-item',
            text: inpNewTask.val()
        })
        listitem.click(() => {
            listitem.toggleClass('done')
        })
        ulTasks.prepend(listitem)
        inpNewTask.val('')
    }
}

$('#ulTasks.done').html('<span class="badge bg-success">Success</span>')

function cleardone() {

    $('#ulTasks .done').remove()
}

function sorting() {
    $('#ulTasks .done').appendTo(ulTasks)
}


inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
})
btnAdd.click(addItem)
btnReset.click(() => inpNewTask.val(''))

btnCleanup.click(cleardone)
btnSort.click(sorting)