var questionId;
function GetQuestion() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetQuestion/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'QuestionId': 6,
        }),
        success: function(data){
            console.log(data);
            questionId = data.QuestionId;
            $("#question").html(data.Content);
            console.log(data);
            console.log("success11");
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}
function Answer() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/Answer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'QuestionAnsweredId': questionId,
            'SubmitTime': new Date(),
            'Content': $("#answer").val(),
        }),
        success: function(data){
            answer = data;
            console.log(data);
            console.log("success22");
        },
        error: function(err){
            console.log(err);
            console.log('fail22');
        }
    });
}