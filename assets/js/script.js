// Reference URL: 'https://raw.githubusercontent.com/taivop/joke-dataset/master/stupidstuff.json'
// Find Local File at: 'assets/vendor/stupidstuff.json'

$(document).ready(function () {      

    $.ajax({

        url: 'https://raw.githubusercontent.com/taivop/joke-dataset/master/stupidstuff.json', 
         
            type: 'GET',
        
            dataType: 'json',        

            success: function (data) {                                        
            var $loademorebtn = document.createElement("button");
            $loademorebtn.classList.add('loadmorebutton');
            $loademorebtn.innerHTML='Random Joke';
            var $main = $("main");
            $main.append($loademorebtn);
                        
            jokesdetails();
            
            $($loademorebtn).click(function() {

                $($loademorebtn).addClass('hidden').removeClass('loademorebtn');    
                $('.loader').removeClass('hidden loader').addClass('bottomload');
                $('.j_id, .j_category, .j_joke').addClass('hidden');                
                setTimeout(function(){                    
                    jokesdetails();
                    $('.bottomload').addClass('hidden loader').removeClass('bottomload');  
                    $($loademorebtn).addClass('loademorebtn').removeClass('hidden');
                }, 1000);
            });

            function jokesdetails(){                

                const $loader = $(".loader");
                var $loadingstatus = false;
                var $abc = data[Math.floor(Math.random()*data.length)];
                console.log($abc);

                var $id = $abc.id;
                var $category = $abc.category;
                var $joke = $abc.body;

                var $datalist = $('#datalist');
                $datalist.html(`
                <li>
                    <div class="t_id"><span>ID</span></div>
                    <div class="t_category"><span>CATEGORY</span></div>
                    <div class="t_joke"><p>JOKE</p></div>
                </li>
                <li>
                    <div class="j_id"><span>(${$id})</span></div>
                    <div class="j_category"><span>${$category}</span></div>
                    <div class="j_joke"><p>${$joke}</p></div>
                </li>`);
                
                $loadingstatus = true;
                if ($loadingstatus == true) {
                    $loader.addClass("hidden");
                }
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Database');             
        }  
    });  
});  

