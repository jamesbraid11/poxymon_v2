from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class RegistrationSerializer(serializers.ModelSerializer):

  # class attributes preventing serialization
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)

  class Meta:
    model = User
    fields = '__all__'
    extra_fields = ['password_confirmation']

  # validating passwords
  def validate(self, data):
    password = data.get('password')
    password_confirmation = data.pop('password_confirmation') 
    # removes password_confirmation from the data object

    # validate passwords
    if password != password_confirmation:
      raise serializers.ValidationError('Passwords do not match')
    
    # return data without password_confirmation to be saved
    return data
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data) # this hashes the password
    return user
  
class PoxymonListUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username']