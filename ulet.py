import random
import time
import pygame

# Initialize the pygame
pygame.init()

# Colors
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
black = (0, 0, 0)

# Display setup
width = 800
height = 600
win = pygame.display.set_mode((width, height))
pygame.display.set_caption("Snake Game")

# FPS controller
clock = pygame.time.Clock()

# Snake and food
snake_size = 20
snake_speed = 15

# Defining snake and food
snake_pos = [[100, 50], [90, 50], [80, 50]]
food_pos = [random.randrange(1, (width//snake_size)) * snake_size, random.randrange(1, (height//snake_size)) * snake_size]
food_spawn = True
direction = "RIGHT"

# Score setup
score = 0
font = pygame.font.Font('freesansbold.ttf', 16)

# Game loop
run = True
while run:
    clock.tick(snake_speed)
    win.fill(black)

    # Painting the snake
    for pos in snake_pos:
        pygame.draw.rect(win, green, pygame.Rect(pos[0], pos[1], snake_size, snake_size))

    # Painting the food
    pygame.draw.rect(win, white, pygame.Rect(food_pos[0], food_pos[1], snake_size, snake_size))

    # Score
    text = font.render("Score: " + str(score), True, white)
    win.blit(text, [0, 0])

    # Updating the snake's position
    for i in range(len(snake_pos) - 1, 0, -1):
        snake_pos[i] = snake_pos[i - 1].copy()
    if direction == "RIGHT":
        snake_pos[0][0] += snake_size
    elif direction == "LEFT":
        snake_pos[0][0] -= snake_size
    elif direction == "UP":
        snake_pos[0][1] -= snake_size
    elif direction == "DOWN":
        snake_pos[0][1] += snake_size

    # Changing the direction of the snake
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP and direction != "DOWN":
                direction = "UP"
            if event.key == pygame.K_DOWN and direction != "UP":
                direction = "DOWN"
            if event.key == pygame.K_LEFT and direction != "RIGHT":
                direction = "LEFT"
            if event.key == pygame.K_RIGHT and direction != "LEFT":
                direction = "RIGHT"
            if event.key == pygame.K_ESCAPE:
                run = False

    # Checking for food collision
    if snake_pos[0][0] == food_pos[0] and snake_pos[0][1] == food_pos[1]:
        score += 1
        food_spawn = False

    # Spawning new food
    if not food_spawn:
        food_pos = [random.randrange(1, (width//snake_size)) * snake_size, random.randrange(1, (height//snake_size)) * snake_size]
    food_spawn = True

    # Checking for wall collisions
    if snake_pos[0][0] < 0 or snake_pos[0][0] >= width or snake_pos[0][1] < 0 or snake_pos[0][1] >= height:
        run = False
