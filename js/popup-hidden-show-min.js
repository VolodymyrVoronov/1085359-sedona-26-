var link=document.querySelector(".search__btn"),form=document.querySelector(".search__form"),send=form.querySelector(".search-form__btn"),dateOfArrival=form.querySelector("[name=date-of-arrival]"),dateOfDeparture=form.querySelector("[name=date-of-departure]"),amountOfAdults=form.querySelector("[name=amount-of-adults]"),amountOfChildren=form.querySelector("[name=amount-of-children]"),storage={};storage.amountOfAdults=localStorage.getItem("amount-of-adults"),storage.amountOfChildren=localStorage.getItem("amount-of-children"),storage.amountOfAdults&&(amountOfAdults.value=storage.amountOfAdults,amountOfChildren.focus()),storage.amountOfChildren&&(amountOfChildren.value=storage.amountOfChildren,send.focus()),link.addEventListener("click",function(e){e.preventDefault(),form.classList.remove("search-form--error"),form.classList.toggle("search-form--invisible")}),form.addEventListener("submit",function(e){dateOfArrival.value&&dateOfDeparture.value&&amountOfAdults.value&&amountOfChildren.value?(localStorage.setItem("amount-of-adults",amountOfAdults.value),localStorage.setItem("amount-of-children",amountOfChildren.value)):(e.preventDefault(),form.classList.remove("search-form--error"),form.offsetWidth=form.offsetWidth,form.classList.add("search-form--error"))});