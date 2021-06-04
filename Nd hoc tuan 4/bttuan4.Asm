.386
.model flat, stdcall  ;32 bit memory model
.stack 100h
option casemap :none  ;case sensitive
include user32.inc
include kernel32.inc
include windows.inc
; Directives for the linker to link libraries
includelib c:\masm32\lib\user32.lib
includelib c:\masm32\lib\kernel32.lib


.data
	szLink				db "C:\RadASM\Masm\Projects\bttuan4\notepad.exe",0
	szOutputPath		db "out.txt",0   
	szErrorCaption		db "Error!", 0
	szErrorText	   		db "Cannot open file", 0
	szTheResultCaption 	db "Done!" , 0
	szTheResult			db "Do you want to show result ?", 0
	szInputString	 	db 100 dup(0)
	szOutputString 		db 100 dup (0)
	wfdt WIN32_FIND_DATA <?> 
	numberOfSection		db "Number of sections:",0
	entryPoint			db "EtryPoint:",0
	imageBase 			db "ImageBase:",0
	VirtualAdd			db "VirtualAdd:",0
	VirtualSize			db "VirtualSize:",0
	RawAdd				db "RawAdd:",0
	RawSize				db "RawSize:", 0
	downline 			dd 13,10,0 
	hfile 				dd 0 
	EntryPoint			dd 0
	ReadInfo			dw 0
	
.code 
ReadFileInput proc
;chuoi chuyen vao inputstring [ebp + 8]
	push ebp
	mov ebp,esp;
	sub esp,16;
	
	; LOCAL FileSizeHigh :dword  [ebp-4]
	; LOCAL FileSize:dword		 [ebp-8]	
	;LOCAL hHandleFileInput:dword [ebp-12] 
	;LOCAL nByteRead:dword        [ebp-16]
	mov ebx, [ebp + 8]; chuyen vao string

	push 0h;  
	push 4h ; 
	push 3h ; 	
	push 0h ; 
	push 1h ;
	push 80000000h;
	push offset szLink
	Call CreateFile

	mov  [ebp-12], eax
	cmp  eax, -1
	je	 errReadFileText
	
	lea  eax, [ebp-4]
	push eax
	push [ebp-12]
	call GetFileSize 
	mov [ebp-8], eax

	push 0
	lea  eax, [ebp - 16]
	push eax
	push [ebp-8]
	push [ebp+8]
	push [ebp-12]
	Call ReadFile 

	push [ebp-12]
	call CloseHandle
	leave
	ret 4

errReadFileText:
	push offset szErrorText
	call ErrorMessage 
ReadFileInput endp

WriteFileOutput proc 
	;chuyen vao outputString [ebp + 8]
	
	push ebp
	mov ebp, esp
	sub esp,12
	;LOCAL BufferLength:dword
	;LOCAL hHandleFileOutput:dword
	;LOCAL nByteWrite:dword
	mov ebx, [ebp+8]
	
	push eax
	push edx
	push 0h
	push 0h
	push 3h
	push 0h
	push 1h
	push 40000000h
	push offset szOutputPath
	Call CreateFile

	mov  [ebp-8], eax
	cmp  eax, -1
	je	 errWriteFileText

	push FILE_END
	push 0
	push 0
	push [ebp-8]
	call SetFilePointer
	push [ebp+8]
	call lstrlen
	mov  [ebp-4], eax

	push 0
	lea  eax, [ebp-12]
	push eax
	push [ebp-4]
	push [ebp+8]
	push [ebp-8]
	Call WriteFile 

	push [ebp-8]
	call CloseHandle

	pop edx
	pop eax
	leave
	ret 4
errWriteFileText:
	push offset szErrorText
	call ErrorMessage 
WriteFileOutput endp

ErrorMessage proc ErrText:DWORD
	push 0
	push offset szErrorCaption	; Caption
	push ErrText				; Text
	push 0
	call MessageBox
	ret
	
ErrorMessage endp

	program:	
		;ham doc file
		push 	offset szInputString
		call 	ReadFileInput
		mov 	hfile, eax
		
		mov ReadInFo, 0
		
		
		;Dich con tro o dau file PE
		push 	FILE_BEGIN
		push 	0
		push 	60
		push 	offset hfile
		call 	SetFilePointer
		
		push	0
		push	
	end program