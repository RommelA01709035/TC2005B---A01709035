#lang racket

;;sum: number numer =62 number
(define sum
  (lambda (a b)
    (+ a b)))

;; are of circle: number =62 number
(define area-of-circle
  (lambda (radius)
    (* radius radius 3.14159)))

;;area-of-ring: number number =62 number
(define area-of-ring
  (lambda (outer inner)
    (-(area-of-circle outer) (area-of-circle inner))))

;;Volume-of-cylinder
(define volume-of-cylinder
  (lambda (radius height)
    (* (volume-of-cylinder radius) height)))








