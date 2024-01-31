from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Poxymon(models.Model):
  name = models.CharField(max_length=50)
  description = models.TextField(max_length=500)
  type = models.ForeignKey(
    to='poxymon_types.Type',
    on_delete=models.PROTECT,
    related_name='poxymon'
  )
  image = models.CharField()
  hp = models.PositiveIntegerField(validators=[MinValueValidator(100)])
  speed = models.PositiveIntegerField(validators=[MinValueValidator(100)])
  move_one_name = models.CharField(max_length=50)
  move_one_type = models.ForeignKey(
    to='poxymon_types.Type',
    on_delete=models.PROTECT,
    related_name='move_one'
  )
  move_one_power = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
  move_two_name = models.CharField(max_length=50)
  move_two_type = models.ForeignKey(
    to='poxymon_types.Type',
    on_delete=models.PROTECT,
    related_name='move_two'
  )
  move_two_power = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
  creator = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='poxymon_created',
    null=True
  )
  likes = models.ManyToManyField(
    to='users.User',
    related_name='poxymon_liked',
    blank=True
  )

  def __str__(self):
    return f'{self.name}'