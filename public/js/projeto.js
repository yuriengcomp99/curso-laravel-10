function deleteRegistroPaginacao(rotaUrl, idRegistro)
{
    if(confirm('Deseja excluir mesmo o item?')){
       $.ajax({
            url: rotaUrl,
            method: 'DELETE',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: {
                id: idRegistro,
            },
            beforeSend: function (){
                $.blockUI({
                    message: 'Carregando ...',
                    timeout: 2000,
                });
            },
       }).done(function (data){

            $.unblockUI();
            if(data.success == true){
                window.location.reload();
            }else{
                alert('Não foi possível excluir');
            }

       }).fail(function (data){
            $.unblockUI();
            alert('Não foi possivel carregar os dados');

       });
    }
}