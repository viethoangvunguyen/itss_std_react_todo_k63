
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, handleStatus }) {
  return (
    <label className="panel-block">
      <input type="checkbox" value={item.done} onChange={(e) => handleStatus(e, item.key)} />
      <span className={item.done ? 'has-text-grey-light' : ''}>{item.text}</span>
    </label>
  )
}

export default TodoItem