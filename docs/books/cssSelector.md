# 《CSS选择器世界》

## 一、概述

> 主要介绍了下CSS选择器的基本概念：选择器、选择符、伪类、伪元素、作用域、命名空间、无效特性的实际应用。

### 选择器、选择符、伪类、伪元素

这部分基础内容与之前总结的相似，可以参看[CSS基础-Selector](../article/css_base.md)。

### 关于选择器作用域

以前CSS只有一个全局作用域，如今选择器是有局部作用的概念的，伪类:scope。但是**没有浏览器支持**。

可以体现局部作用域的是js中和Shadow DOM中，JS中在后面章节会说。

这里说下[Shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM) （关于Shadow DOM，后续会单拿出来讲），ShadowDom创建的`<p>`元素的背景色是黑色，而页面原本的`<p>`元素的背景色不受影响。

原文介绍链接：[https://demo.cssworld.cn/selector/1/2-1.php](https://demo.cssworld.cn/selector/1/2-1.php)

### 命名空间

了解有这么个东西就行，基本上实际开发时用不到。

### 无效特性的实际应用

很多css伪类选择器是最近几年才出现的，所有不是所有的浏览器都支持，浏览器会把这些选择器当做无效选择器。而当无效的css选择器和有效的选择器写在一起时，会导致整个选择器无效，例子：
```css
.example:hover,
.example:active,
.example:focus-within {
  color: red;
}
```

IE支持:hover和:active，但是并不支持:focus-within伪类，这就会导致IE浏览器无法识别整个语句。

所以在我们使用一些新的css选择器是，出于渐进增强的考虑，需要将他们分开写。

不过，这种无效选择器有一个**例外**，那就是浏览器可以识别以-webkit-私有前缀开头的伪元素。（除了IE浏览器，其他浏览器均支持（firefox 63及以上版本））。

所以在实际开发中，可以利用这个特性对IE浏览器和其他浏览器进行精准区分：
```css
/* IE浏览器 */
.example {
  background: black;
}

/* 其他浏览器 */
.example, ::-webkit-whatever {
  background: red;
}
```

## 二、选择器的优先级

### CSS优先级

### 优先级计算规则

### 注意事项

#### 越级现象和css reset


## 三、CSS选择器的命名

### 区分大小写

### 命名的合法性

### 最佳实践

