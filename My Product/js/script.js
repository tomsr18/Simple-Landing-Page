"use strict";

const burger = document.querySelector(".fa-bars");
const menu = document.querySelector("#menu-content");
const background = document.querySelector(".burger-nav");
const closeBtn = document.querySelector(".close");
const menuShadow = document.querySelector("#menu-shadow");
const videoShadow = document.querySelector("#video-shadow");
const video = document.querySelector("iframe");
const videoBtn = document.querySelector(".btn-video");
const getStarted = document.querySelector("#get-started");
const firstSection = document.querySelector("#first-section");
const popupWindow = document.querySelector(".popup-window");
const signupShadow = document.querySelector("#signup-shadow");
const signupBtn = document.querySelector(".signup");
const signupBtn2 = document.querySelector(".signup-btn");
const closePopupBtn = document.querySelector(".close-popup");

function openMenu() {
  menu.style.display = "block";
  background.style.display = "block";
  closeBtn.style.display = "block";
  menuShadow.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
  background.style.display = "none";
  closeBtn.style.display = "none";
  menuShadow.style.display = "none";
}

function openVideo() {
  video.style.display = "block";
  videoShadow.style.display = "block";
}

function closeVideo() {
  video.style.display = "none";
  videoShadow.style.display = "none";
}

function openPopup() {
  popupWindow.style.display = "flex";
  signupShadow.style.display = "block";
}

function closePopup() {
  popupWindow.style.display = "none";
  signupShadow.style.display = "none";
}

burger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuShadow.addEventListener("click", closeMenu);

videoBtn.addEventListener("click", openVideo);
videoShadow.addEventListener("click", closeVideo);

signupBtn.addEventListener("click", openPopup);
signupBtn2.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
signupShadow.addEventListener("click", closePopup);
