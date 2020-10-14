<div>
  {cash != null && <p>{cash}원 보유 중</p>}
  {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
// 무사히 뒷 문자들을 출력하려면 앞이 null인지 체크
