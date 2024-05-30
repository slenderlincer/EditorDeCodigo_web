.class public CodeVerse
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 9
.limit locals 11

ldc 10
istore 0

ldc 0
istore 1

ldc 0
istore 2

whileStartLabel0:
iload 1
ldc 3
if_icmpge whileEndLabel1
iload 1
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload 2
ldc 1
if_icmplt elseIfLabel3
iload 2
ldc 3
if_icmpgt elseIfLabel3
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "numero en rango permitido"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload 2
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto finLabelIf2

elseIfLabel3:
iload 2
ldc 4
if_icmplt elseLabel4
iload 2
ldc 7
if_icmpgt elseLabel4
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Numero en rango invalido"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload 2
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto finLabelIf2

elseLabel4:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Número fuera de rango. Inténtalo de nuevo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iinc 1 1

finLabelIf2:
iload 1
ldc 3
if_icmpne finLabelIf5
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Has alcanzado el máximo de intentos permitidos.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

whileStartLabel6:
iload 0
ldc 0
if_icmple whileEndLabel7
iload 0
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload 0
ldc 1
isub
istore 0

goto whileStartLabel6
whileEndLabel7:
goto finLabelIf5

finLabelIf5:
iinc 1 1

goto whileStartLabel0
whileEndLabel1:
return
.end method