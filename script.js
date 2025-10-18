$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var letter = envelope.find(".letter");

  envelope.click(function () {
    // เช็คก่อนว่าปุ่มใช้งานได้หรือไม่ ถ้าไม่ได้ก็ไม่ต้องทำอะไร
    if (!btn_open.prop('disabled')) {
      open();
    }
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    // 1. ปิดการใช้งานปุ่มทั้งหมดทันที
    btn_open.prop('disabled', true);
    btn_reset.prop('disabled', true);
    
    envelope.addClass("open").removeClass("close");
    
    // 2. ตั้งเวลาให้เท่ากับแอนิเมชันตอนเปิด (4s animation + 0.7s delay)
    setTimeout(function() {
      // 3. พอแอนิเมชันจบ ก็เปิดใช้งานปุ่ม "ปิด"
      btn_reset.prop('disabled', false);
    }, 5000); 
  }
  
  function close() {
    // 1. ปิดการใช้งานปุ่มทั้งหมดทันที
    btn_open.prop('disabled', true);
    btn_reset.prop('disabled', true);
    
    envelope.addClass("is-closing").removeClass("open");
    
    // 2. ตั้งเวลา 2 วินาที (เท่ากับแอนิเมชันตอนปิด)
    setTimeout(function() {
      envelope.removeClass("is-closing");
      envelope.addClass("close");
      
      // 3. พอแอนิเมชันจบ ก็เปิดใช้งานปุ่ม "เปิด"
      btn_open.prop('disabled', false);
    }, 8000); 
  }
});